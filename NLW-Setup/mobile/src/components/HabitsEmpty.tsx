import { Text } from "react-native";


export function HabitsEmpty() {
  return (
    <Text
      className="text-zinc-400 text-base"
    >
      Nenhum hábito

      <Text
        className="text-violet-400 text-base underline"
      >
        criar?
      </Text>

    </Text>
  )
}