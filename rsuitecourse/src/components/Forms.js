import React from "react";
import {Button, ButtonToolbar, Form, Input} from "rsuite";
import {SchemaModel, StringType} from "schema-typed";
const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

function FormComponent() {
  const [formValue, setFormValue] = React.useState({
    name: "",
    email: "",
    textarea: ""
  })
  const formRef = React.useRef();

  const model = SchemaModel({
    name: StringType().isRequired("Full name is required!"),
    email: StringType().isEmail("Email must be valed!!!").isRequired("THIS IS REQUIRED!"),
    textarea: StringType().isRequired("A MESSAGE MUST BE ENTERED!")
  })
  const handleSubmit = () => {
    if(!formRef.current.check()) {
      console.error("FORM ERROR!");
      return;
    }
    console.log(formValue, "FORM VALUE")
  }
  
  return (
    <Form
    ref={formRef}
    model={model}
    onChange={setFormValue}
    onSubmit={handleSubmit}
    fluid>
      <Form.Group controlId="name">
        <Form.ControlLabel>Full Name</Form.ControlLabel>
        <Form.Control name="name"/>
        <Form.HelpText tooltip>Full Name is required</Form.HelpText>
      </Form.Group>
      <Form.Group controlId="email">
        <Form.ControlLabel>Email</Form.ControlLabel>
        <Form.Control name="email"/>
        <Form.HelpText>Email is required</Form.HelpText>
      </Form.Group>
      <Form.Group controlId="textarea">
        <Form.ControlLabel>Enter a message</Form.ControlLabel>
        <Form.Control name="textarea" rows={6} accepter={Textarea} />
      </Form.Group>
      <ButtonToolbar>
        <Button appearance="primary" type="submit">
          Submit
        </Button>
      </ButtonToolbar>
    </Form>
  );
}

export default FormComponent;
