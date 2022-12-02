import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import PlineTools from "../../services/PlineTools";

const SipGlobals = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({});

  const load = () => {
    PlineTools.getRequest("/settings/sip-globals")
      .then((result) => {
        console.log(result.data);
        setState(result.data);
      })
      .catch(() => {
        toast.error("Getting Data failed");
      });
  };

  useEffect(() => {
    load();
  }, []);

  const saveData = (e) => {
    e.preventDefault();
    PlineTools.postRequest("/settings/save-sip-globals", state).then(
      (result) => {
        if (result.error) {
          result.errorsDesc.forEach((value) => {
            toast.error(value);
          });
        } else {
          toast.success("Saved completed successfully");
          navigate("/home");
        }
      }
    );
  };

  return (
    <section className="m-3">
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
                  setState({ ...state, debug: e.target.checked });
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
                  setState({ ...state, disableMultiDomain: e.target.checked });
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
                  setState({
                    ...state,
                    ignoreUriUserOptions: e.target.checked,
                  });
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
                  setState({
                    ...state,
                    mwiDisableInitialUnsolicited: e.target.checked,
                  });
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
                  setState({
                    ...state,
                    contactExpirationCheckInterval: e.target.checked,
                  });
                }}
                defaultValue={state.contactExpirationCheckInterval}
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
                  setState({
                    ...state,
                    defaultFromUser: e.target.checked,
                  });
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
                  setState({
                    ...state,
                    defaultOutboundEndpoint: e.target.checked,
                  });
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
                  setState({
                    ...state,
                    defaultRealm: e.target.checked,
                  });
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
                  setState({
                    ...state,
                    defaultVoicemailExtension: e.target.checked,
                  });
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
    </section>
  );
};

export default SipGlobals;
