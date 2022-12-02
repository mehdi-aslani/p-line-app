import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { PencilSquare, Trash, UiChecks } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GridView from "../../grid-view/GridView";
import PlineTools from "../../services/PlineTools";

const SipProfilesList = () => {
  const [state, setState] = useState({ content: [] });
  const [searchParams] = useState({});
  const [sortParams] = useState({});
  const navigate = useNavigate();

  const pageSize = 10;
  const columns = [
    {
      label: "Row",
      id: "#",
      search: false,
    },
    {
      label: "Name",
      id: "name",
      search: true,
      sort: true,
    },
    {
      label: "Description",
      id: "description",
      search: true,
      sort: true,
    },
    {
      label: "Profile Details",
      id: "id",
      value: (value) => {
        return (
          <p
            className="view"
            onClick={() => {
              navigate("/sip-profile-details/" + value);
            }}
          >
            <UiChecks />
          </p>
        );
      },
    },
    {
      label: "Edit",
      id: "id",
      value: (value) => {
        return (
          <p
            className="edit"
            onClick={() => {
              Edit(value);
            }}
          >
            <PencilSquare />
          </p>
        );
      },
    },
    {
      label: "Delete",
      id: "id",
      value: (value) => {
        return (
          <p
            className="delete"
            variant="danger"
            onClick={() => {
              Delete(value);
            }}
          >
            <Trash />
          </p>
        );
      },
    },
  ];

  const getData = (page = 0, size = pageSize) => {
    const searchUrl = new URLSearchParams(searchParams).toString();

    let sort = "";
    if (sortParams?.sort !== undefined) {
      sort = "sort=" + sortParams.sort;
    }

    PlineTools.getRequest(
      `/sip-profiles/index?page=${page}&size=${size}&${searchUrl}&${sort}`
    )
      .then((data) => {
        setState(data);
      })
      .catch((error) => {
        toast.error(
          "An error occurred while executing your request. Contact the system administrator\n" +
          error
        );
      });
  };

  const Delete = (id) => {
    if (window.confirm("Are you sure you want to delete this Profile?")) {
      PlineTools.postRequest("/sip-profiles/delete", { id: id }).then((result) => {
        if (result.error) {
          result.errorsDesc.forEach((element) => {
            toast.error(element);
          });
        } else {
          toast.success("The profile was deleted");
          getData();
        }
      });
    }
  };

  const Edit = (id) => {
    navigate("/sip-profiles/edit/" + id);
  };

  useEffect(() => {
    getData();
    return () => { };
  }, []);

  const search = (f, v) => {
    searchParams[f] = v;
    getData();
  };

  const sort = (f) => {
    sortParams.sort = f;
    getData();
  };

  return (
    <div>
      <Row>
        <Col>
          <Button
            onClick={() => {
              navigate("/sip-profiles/create");
            }}
          >
            New Profile
          </Button>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h4>List of SIP profiles</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <GridView
            Columns={columns}
            Data={state.content}
            Events={{
              first: () => {
                getData(0);
              },
              pre: () => {
                if (state.pageable?.pageNumber - 1 >= 0)
                  getData(state.pageable?.pageNumber - 1);
              },
              next: () => {
                if (state?.totalPages > state.pageable?.pageNumber + 1)
                  getData(state.pageable?.pageNumber + 1);
              },
              last: () => {
                getData(state?.totalPages - 1);
              },
            }}
            Pagination={{
              totalElements: state?.totalElements,
              totalPages: state?.totalPages,
              size: state.pageable?.pageSize,
              offset: state.pageable?.offset,
              pageNumber: state.pageable?.pageNumber,
            }}
            SearchEvent={search}
            SortEvent={sort}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SipProfilesList;
