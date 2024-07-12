export function trackDeprecated(...deprecations: string[]) {
    /**
     * Listen for deprecation warnings
     */
    // istanbul ignore next @preserve-line
    process.addListener("warning", warning => {
        if (warning.name !== "DeprecationWarning") return;

        /**
         * Find deprecation name in the warning message
         */
        const deprecation = warning.message.match(/`(.+?)`/iu)?.[1];
        if (!deprecation) return;

        const index = deprecations.indexOf(deprecation);
        if (index !== -1) {
            /**
             * Remove expected warnings from the deprecations array
             */
            deprecations.splice(index, 1);
        } else {
            /**
             * Add unexpected warnings to the deprecations array
             */
            deprecations.push(deprecation);
        }
    });

    return (waitDurationMs = 1000) => {
        test("Deprecation Warnings", async () => {
            /**
             * Wait for `waitDuration` to ensure deprecations are emitted first
             */
            const notTracked = await (() => {
                return new Promise<string[]>(resolve => {
                    setTimeout(() => {
                        return resolve(deprecations);
                    }, waitDurationMs);
                });
            })();

            expect(notTracked.join(", "), "Expected Deprecations").toBe("");
        });
    };
}
