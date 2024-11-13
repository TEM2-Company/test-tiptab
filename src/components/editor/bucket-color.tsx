import { CaretDownOutlined } from "@ant-design/icons";
import { Button, ColorPicker } from "antd";
import { useMemo } from "react";
import bucketIcon from "../../assets/icons/bucket.svg";
interface IProps {
  value?: string;
  onChange?: (value: string) => void;
}

const BucketColor = ({ onChange, value = "#fff200" }: IProps) => {
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
              <img src={bucketIcon} height={12} />
              <div
                style={{
                  width: 12,
                  height: 2,
                  background: bgColor,
                  marginTop: 2,
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

export default BucketColor;
