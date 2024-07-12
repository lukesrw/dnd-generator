type IsMatch<Comparison> = <Input>() => Input extends Comparison ? 1 : 2;

export type IsExtend<Expected, Received> = Received extends Expected ? true : false;

export type IsEqual<Expected, Received> = IsExtend<IsMatch<Expected>, IsMatch<Received>>;
