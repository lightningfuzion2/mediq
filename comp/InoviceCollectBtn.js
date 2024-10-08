import FloatBtn from "./FloatBtn";

export default function InoviceCollectBtn({amount, onPress}) {
  return amount > 0 && <FloatBtn text={"Collect ₹ " + amount} onPress={onPress} />;
}
