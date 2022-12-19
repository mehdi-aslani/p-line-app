import React, { useState, useEffect, FormEventHandler } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import PlineTools, { TypeAlert } from "../../services/PlineTools";

const SipProfileForm = () => {
  const params = useParams();
  const [state, setState] = useState({
    id: null,
    name: "",
    description: "",
  });
  const navigate = useNavigate();

  const saveData = (e: any) => {
    e.preventDefault();

    let url = "/sip-profiles";
    if (state.id == null) {
      url += "/create";
    } else {
      url += "/update";
    }

    PlineTools.postRequest(url, state)
      .then((result) => {
        if (result.data.hasError) {
          PlineTools.showAlert(result.data.messages, TypeAlert.Danger);
        } else {
          navigate("/sip-profiles/index");
        }
      })
      .catch((error) => {
        PlineTools.errorDialogMessage("An error occurred while executing your request. Contact the system administrator");
      });
  };

  const getData = () => {
    const id = params.id;
    if (id != undefined) {
      PlineTools.getRequest("/sip-profiles/get/" + id)
        .then((result) => {
          setState(result.data);
        })
        .catch(() => {
          PlineTools.errorDialogMessage("An error occurred while executing your request. Contact the system administrator");
        });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <Row>
        <Col>
          <h5>SIP Profiles</h5>
        </Col>
      </Row>
      <hr />
      <Form onSubmit={saveData}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            defaultValue={state.name}
            onChange={(e) => {
              let tmp = { ...state };
              tmp.name = e.target.value;
              setState(tmp);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="family"
            as={"textarea"}
            rows={3}
            maxLength={1024}
            defaultValue={state.description}
            onChange={(e) => {
              let tmp = { ...state };
              tmp.description = e.target.value;
              setState(tmp);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>{" "}
        <Button
          onClick={() => {
            navigate("/sip-profiles/index");
          }}
          variant="danger"
          type="button"
        >
          Cancel
        </Button>
      </Form>
    </section>
  );
};

export default SipProfileForm;
