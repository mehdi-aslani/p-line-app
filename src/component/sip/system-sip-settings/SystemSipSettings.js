import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getRequest, postRequest } from "../../services/PlineTools";
const SystemSipSettings = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({});
  useEffect(() => {
    getRequest("/settings/system-sip-settings")
      .then((result) => {
        setState(result);
      })
      .catch(() => {
        toast.error("Getting Data failed");
      });
  }, []);
  const saveData = (e) => {
    e.preventDefault();
    postRequest("/settings/save-system-sip-settings", state).then((result) => {
      if (result.error) {
        result.errorsDesc.forEach((value) => {
          toast.error(value);
        });
      } else {
        toast.success("Saved completed successfully");
        navigate("/home");
      }
    });
  };
  return (
    <div>
      <Container>
        <h3>System Sip Settings</h3>
        <hr />
        <Form onSubmit={saveData}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="compactHeaders">
                <Form.Check
                  type="checkbox"
                  label="Compact Headers"
                  onChange={(e) => {
                    let tmp = { ...state };
                    tmp.compactHeaders = e.target.checked;
                    setState(tmp);
                  }}
                  onClick={(e) => {
                    let tmp = { ...state };
                    tmp.compactHeaders = e.target.checked;
                    setState(tmp);
                  }}
                  defaultChecked={state.compactHeaders}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="disableTcpSwitch">
                <Form.Check
                  type="checkbox"
                  label="Disable Tcp Switch"
                  onChange={(e) => {
                    let tmp = { ...state };
                    tmp.disableTcpSwitch = e.target.checked;
                    setState(tmp);
                  }}
                  onClick={(e) => {
                    let tmp = { ...state };
                    tmp.disableTcpSwitch = e.target.checked;
                    setState(tmp);
                  }}
                  defaultChecked={state.disableTcpSwitch}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="followEarlyMediaFork">
                <Form.Check
                  type="checkbox"
                  label="Follow Early Media Fork"
                  onChange={(e) => {
                    let tmp = { ...state };
                    tmp.followEarlyMediaFork = e.target.checked;
                    setState(tmp);
                  }}
                  onClick={(e) => {
                    let tmp = { ...state };
                    tmp.followEarlyMediaFork = e.target.checked;
                    setState(tmp);
                  }}
                  defaultChecked={state.followEarlyMediaFork}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="acceptMultipleSdpAnswers">
                <Form.Check
                  type="checkbox"
                  label="Accept Multiple Sdp Answers"
                  onChange={(e) => {
                    let tmp = { ...state };
                    tmp.acceptMultipleSdpAnswers = e.target.checked;
                    setState(tmp);
                  }}
                  onClick={(e) => {
                    let tmp = { ...state };
                    tmp.acceptMultipleSdpAnswers = e.target.checked;
                    setState(tmp);
                  }}
                  defaultChecked={state.acceptMultipleSdpAnswers}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              {" "}
              <Form.Group className="mb-3" controlId="disableRport">
                <Form.Check
                  type="checkbox"
                  label="Disable Rport"
                  onChange={(e) => {
                    let tmp = { ...state };
                    tmp.disableRport = e.target.checked;
                    setState(tmp);
                  }}
                  onClick={(e) => {
                    let tmp = { ...state };
                    tmp.disableRport = e.target.checked;
                    setState(tmp);
                  }}
                  defaultChecked={state.disableRport}
                />
              </Form.Group>
            </Col>
            <Col md={6}></Col>
          </Row>

          <Row>
            <Col md={6}>
              {" "}
              <Form.Group className="mb-3" controlId="threadPoolAutoIncrement">
                <Form.Label>Thread Pool Auto Increment</Form.Label>
                <Form.Control
                  type="number"
                  required={true}
                  min={0}
                  onChange={(e) => {
                    let tmp = { ...state };
                    tmp.threadPoolAutoIncrement = parseInt(e.target.value);
                    setState(tmp);
                  }}
                  defaultValue={state?.threadPoolAutoIncrement}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="threadPoolIdleTimeout">
                <Form.Label>Thread Pool Idle Timeout</Form.Label>
                <Form.Control
                  type="number"
                  required={true}
                  min={0}
                  onChange={(e) => {
                    let tmp = { ...state };
                    tmp.threadPoolIdleTimeout = parseInt(e.target.value);
                    setState(tmp);
                  }}
                  defaultValue={state?.threadPoolIdleTimeout}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="threadPoolInitialSize">
                <Form.Label>Thread Pool Initial Size</Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  required={true}
                  onChange={(e) => {
                    let tmp = { ...state };
                    tmp.threadPoolInitialSize = parseInt(e.target.value);
                    setState(tmp);
                  }}
                  defaultValue={state?.threadPoolInitialSize}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="threadPoolMaxSize">
                <Form.Label>Thread Pool Max Size</Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  required={true}
                  onChange={(e) => {
                    let tmp = { ...state };
                    tmp.threadPoolMaxSize = parseInt(e.target.value);
                    setState(tmp);
                  }}
                  defaultValue={state?.threadPoolMaxSize}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              {" "}
              <Form.Group className="mb-3" controlId="timerB">
                <Form.Label>Timer B</Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  required={true}
                  onChange={(e) => {
                    let tmp = { ...state };
                    tmp.timerB = parseInt(e.target.value);
                    setState(tmp);
                  }}
                  defaultValue={state?.timerB}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="timerT1">
                <Form.Label>Timer T1</Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  required={true}
                  onChange={(e) => {
                    let tmp = { ...state };
                    tmp.timerT1 = parseInt(e.target.value);
                    setState(tmp);
                  }}
                  defaultValue={state?.timerT1}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Button variant="primary" type="submit">
                Save
              </Button>{" "}
              <Button
                variant="danger"
                onClick={() => {
                  navigate("/home");
                }}
              >
                Cancel
              </Button>{" "}
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default SystemSipSettings;
