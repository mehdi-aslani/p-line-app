import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PlineTools from "../../services/PlineTools";

const SipProfileForm = () => {
  const params = useParams();
  const [state, setState] = useState();
  const navigate = useNavigate();

  const saveData = (e) => {
    e.preventDefault();

    let url = "/sip-profiles";
    if (state.id == null) {
      url += "/create";
    } else {
      url += "/update";
    }

    PlineTools.postRequest(url, state)
      .then((result) => {
        if (result.error) {
          result.errorsDesc.forEach((v) => {
            toast.error(v);
          });

          setState({
            id: state.id,
            name: state.name,
            description: state.description,
          });
        } else {
          toast.success("Information successfully recorded");
          navigate("/sip-profiles/index");
        }
      })
      .catch((error) => {
        toast.error(
          "An error occurred while executing your request. Contact the system administrator\n" +
            error
        );
      });
  };

  const getData = (id) => {
    if (id === undefined) {
      setState({
        id: null,
        name: "",
        description: "",
      });
    } else {
      PlineTools.getRequest("/sip-profiles/get/" + id)
        .then((data) => {
          data.error = [];
          setState(data);
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  };

  useEffect(() => {
    getData(params.id);
  }, [params.id]);

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
            defaultValue={state?.name}
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
            defaultValue={state?.description}
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
