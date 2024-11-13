import { CaretDownOutlined } from "@ant-design/icons";
import { Select } from "antd";

const SelectSize = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Select
        variant="borderless"
        size="small"
        suffixIcon={
          <CaretDownOutlined style={{ color: "#000", fontSize: 10 }} />
        }
      >
        <Select.Option value="large">8px</Select.Option>
        <Select.Option value="large">12px</Select.Option>
        <Select.Option value="large">16px</Select.Option>
        <Select.Option value="large">18px</Select.Option>
      </Select>
    </div>
  );
};

export default SelectSize;
