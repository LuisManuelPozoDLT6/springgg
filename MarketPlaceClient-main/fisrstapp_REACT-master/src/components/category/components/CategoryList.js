import React, { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import axios from "../../../shared/plugins/axios";
import FeatherIcon from 'feather-icons-react';
import CategoryForm from "./CategoryForm";

export const CategoryList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(second);


  const getCategories = () => {
    axios({ url: "category/", method: "GET" })
      .then((response) => {
        setCategories(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getCategories();
  }, []);

  const columnss = [
    {
      name: "#",
      cell: (row, index) => <div>{index + 1}</div>,
    },
    {
      name: "Categría",
      cell: (row) => <div>{row.description}</div>,
    },
    {
      name: "Estado",
      cell: (row) =>
        row.status.description === "Activo" ? (
          <Badge pill bg="success">
            {row.status.description}
          </Badge>
        ) : (
          <Badge pill bg="danger">
            {row.status.description}
          </Badge>
        ),
    },
  ];

  const paginationOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
  };

  return (
    <Row className="mt-5">
      <Col>
        <Card>
          <Card.Header>
              <Row>
                  <Col>Categorias</Col>
                  <Col className="text-end">
                      <CategoryForm isOpen={isOpen} handleClose={() => setIsOpen(false)}/>
                      <Button variant="success" onClick={() => setIsOpen(true)}>
                          <FeatherIcon icon="plus"/>
                      </Button>
                  </Col>
              </Row>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <DataTable
                columns={columnss}
                data={categories}
                pagination
                paginationOptions={paginationOptions}
              ></DataTable>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
