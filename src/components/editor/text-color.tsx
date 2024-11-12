import { ColorPicker } from "antd";
import { useMemo } from "react";
interface IProps {
  value?: string;
  onChange?: (value: string) => void;
}
const TextColor = ({ onChange, value = "#000000" }: IProps) => {
  const bgColor = useMemo<string>(() => value, [value]);

  return (
    <ColorPicker
      value={value}
      onChange={(_, color) => onChange && onChange(color)}
    >
      <div className="btn-change-color">
        <span style={{ fontWeight: "bold" }}>A</span>
        <div
          style={{ width: 16, height: 4, background: bgColor, marginTop: -2 }}
        ></div>
      </div>
    </ColorPicker>
  );
};

export default TextColor;
