import React from "react";
import Nav from "../components/Navbar";
import { MdDelete } from "react-icons/md";
import { Table } from 'flowbite-react';
const Cart = () => {
  return (
<>
<Nav />
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Brand</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Size</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only"><MdDelete /></span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            
            <Table.Cell>Adidas</Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>10</Table.Cell>
            <Table.Cell>1500</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-2xl text-cyan-600 hover:underline dark:text-cyan-500">
                <MdDelete />
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
    </>
  );
};

export default Cart;
