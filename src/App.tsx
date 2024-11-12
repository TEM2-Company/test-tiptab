import "./App.css";
import { Form } from "antd";
import Editor from "./components/editor";
import "./styles/index.less";
function App() {
  const [form] = Form.useForm();

  return (
    <div>
      <Form form={form}>
        <Form.Item name="name">
          <Editor />
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
