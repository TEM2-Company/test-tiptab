import { CaretDownOutlined } from "@ant-design/icons";
import { Button, ColorPicker } from "antd";
import { useMemo } from "react";
interface IProps {
  value?: string;
  onChange?: (value: string) => void;
}
const TextColor = ({ onChange, value = "#000000" }: IProps) => {
  const bgColor = useMemo<string>(() => value, [value]);

  return (
    <ColorPicker
      disabledAlpha
      value={value}
      onChange={(_, color) => onChange && onChange(color)}
    >
      <Button
        className="t-btn  editor-icon"
        icon={
          <>
            <div className="btn-change-color">
              <span>A</span>
              <div
                style={{
                  width: 12,
                  height: 2,
                  background: bgColor,
                }}
              />
            </div>
            <CaretDownOutlined style={{ fontSize: 10, marginLeft: 4 }} />
          </>
        }
      ></Button>
    </ColorPicker>
  );
};

export default TextColor;
