import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { getRequest, postRequest } from "../../services/PlineTools";

const SipGlobals = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({});
  useEffect(() => {
    getRequest("/settings/sip-globals")
      .then((result) => {
        setState(result);
      })
      .catch(() => {
        toast.error("Getting Data failed");
      });
  }, []);

  const saveData = (e) => {
    e.preventDefault();
    postRequest("/settings/save-sip-globals", state).then((result) => {
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
    <Container>
      <h3>SIP Globals Settings</h3>
      <hr />
      <Form onSubmit={saveData}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="debug">
              <Form.Check
                type="checkbox"
                label="Debug"
                onChange={(e) => {
                  let tmp = { ...state };
                  tmp.debug = e.target.checked;
                  setState(tmp);
                }}
                onClick={(e) => {
                  let tmp = { ...state };
                  tmp.debug = e.target.checked;
                  setState(tmp);
                }}
                defaultChecked={state.debug}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="disableMultiDomain">
              <Form.Check
                type="checkbox"
                label="Disable Multi Domain"
                onChange={(e) => {
                  let tmp = { ...state };
                  tmp.disableMultiDomain = e.target.checked;
                  setState(tmp);
                }}
                onClick={(e) => {
                  let tmp = { ...state };
                  tmp.disableMultiDomain = e.target.checked;
                  setState(tmp);
                }}
                defaultChecked={state.disableMultiDomain}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="ignoreUriUserOptions">
              <Form.Check
                type="checkbox"
                label="Ignore Uri User Options"
                onChange={(e) => {
                  let tmp = { ...state };
                  tmp.ignoreUriUserOptions = e.target.checked;
                  setState(tmp);
                }}
                onClick={(e) => {
                  let tmp = { ...state };
                  tmp.ignoreUriUserOptions = e.target.checked;
                  setState(tmp);
                }}
                defaultChecked={state.ignoreUriUserOptions}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group
              className="mb-3"
              controlId="mwiDisableInitialUnsolicited"
            >
              <Form.Check
                type="checkbox"
                label="Mwi Disable Initial Unsolicited"
                onChange={(e) => {
                  let tmp = { ...state };
                  tmp.mwiDisableInitialUnsolicited = e.target.checked;
                  setState(tmp);
                }}
                onClick={(e) => {
                  let tmp = { ...state };
                  tmp.mwiDisableInitialUnsolicited = e.target.checked;
                  setState(tmp);
                }}
                defaultChecked={state.mwiDisableInitialUnsolicited}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group
              className="mb-3"
              controlId="contactExpirationCheckInterval"
            >
              <Form.Label>Contact Expiration Check Interval</Form.Label>
              <Form.Control
                type="number"
                required={true}
                onChange={(e) => {
                  let tmp = { ...state };
                  tmp.contactExpirationCheckInterval = parseInt(e.target.value);
                  setState(tmp);
                }}
                defaultValue={state?.contactExpirationCheckInterval}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="defaultFromUser">
              <Form.Label>Default From User</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => {
                  let tmp = { ...state };
                  tmp.defaultFromUser = e.target.value;
                  setState(tmp);
                }}
                defaultValue={state.defaultFromUser}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="defaultOutboundEndpoint">
              <Form.Label>Default Outbound Endpoint</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => {
                  let tmp = { ...state };
                  tmp.defaultOutboundEndpoint = e.target.value;
                  setState(tmp);
                }}
                defaultValue={state.defaultOutboundEndpoint}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="defaultRealm">
              <Form.Label>Default Realm</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => {
                  let tmp = { ...state };
                  tmp.defaultRealm = e.target.value;
                  setState(tmp);
                }}
                defaultValue={state.defaultRealm}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="defaultVoicemailExtension">
              <Form.Label>Default Voicemail Extension</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  let tmp = { ...state };
                  tmp.defaultVoicemailExtension = e.target.value;
                  setState(tmp);
                }}
                defaultValue={state.defaultVoicemailExtension}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="endpointIdentifierOrder">
              <Form.Label>Endpoint Identifier Order</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  let tmp = { ...state };
                  tmp.endpointIdentifierOrder = e.target.value;
                  setState(tmp);
                }}
                defaultValue={state.endpointIdentifierOrder}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="keepAliveInterval">
              <Form.Label>Keep Alive nterval</Form.Label>
              <Form.Control
                type="number"
                required
                onChange={(e) => {
                  let tmp = { ...state };
                  tmp.keepAliveInterval = e.target.value;
                  setState(tmp);
                }}
                defaultValue={state.keepAliveInterval}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="maxForwards">
              <Form.Label>Max Forwards</Form.Label>
              <Form.Control
                type="number"
                required
                onChange={(e) => {
                  let tmp = { ...state };
                  tmp.maxForwards = e.target.value;
                  setState(tmp);
                }}
                defaultValue={state.maxForwards}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="mwiTpsQueueHigh">
              <Form.Label>Mwi TPS Queue High</Form.Label>
              <Form.Control
                type="number"
                required
                onChange={(e) => {
                  let tmp = { ...state };
                  tmp.mwiTpsQueueHigh = e.target.value;
                  setState(tmp);
                }}
                defaultValue={state.mwiTpsQueueHigh}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="mwiTpsQueueLow">
              <Form.Label>Mwi TPS Queue Low</Form.Label>
              <Form.Control
                type="number"
                required
                onChange={(e) => {
                  let tmp = { ...state };
                  tmp.mwiTpsQueueLow = e.target.value;
                  setState(tmp);
                }}
                defaultValue={state.mwiTpsQueueLow}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="regcontext">
              <Form.Label>Regcontext</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => {
                  let tmp = { ...state };
                  tmp.regcontext = e.target.value;
                  setState(tmp);
                }}
                defaultValue={state.regcontext}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="unidentifiedRequestCount">
              <Form.Label>Unidentified Request Count</Form.Label>
              <Form.Control
                type="number"
                required
                onChange={(e) => {
                  let tmp = { ...state };
                  tmp.unidentifiedRequestCount = e.target.value;
                  setState(tmp);
                }}
                defaultValue={state.unidentifiedRequestCount}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="unidentifiedRequestPeriod">
              <Form.Label>Unidentified Request Period</Form.Label>
              <Form.Control
                type="number"
                required
                onChange={(e) => {
                  let tmp = { ...state };
                  tmp.unidentifiedRequestPeriod = e.target.value;
                  setState(tmp);
                }}
                defaultValue={state.unidentifiedRequestPeriod}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group
              className="mb-3"
              controlId="unidentifiedRequestPruneInterval"
            >
              <Form.Label>Unidentified Request Prune Interval</Form.Label>
              <Form.Control
                type="number"
                required
                onChange={(e) => {
                  let tmp = { ...state };
                  tmp.unidentifiedRequestPruneInterval = e.target.value;
                  setState(tmp);
                }}
                defaultValue={state.unidentifiedRequestPruneInterval}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="userAgent">
              <Form.Label>User Agent</Form.Label>
              <Form.Control
                type="text"
                required
                minLength={1}
                onChange={(e) => {
                  let tmp = { ...state };
                  tmp.userAgent = e.target.value;
                  setState(tmp);
                }}
                defaultValue={state.userAgent}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            {" "}
            <Form.Group className="mb-3" controlId="maxInitialQualifyTime">
              <Form.Label>Max Initial Qualify Time</Form.Label>
              <Form.Control
                type="number"
                required
                min={0}
                max={100}
                onChange={(e) => {
                  let tmp = { ...state };
                  tmp.maxInitialQualifyTime = e.target.value;
                  setState(tmp);
                }}
                defaultValue={state.maxInitialQualifyTime}
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
  );
};

export default SipGlobals;
