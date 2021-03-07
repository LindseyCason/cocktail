import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./CardItem.css";
import {
  Dimmer,
  Loader,
  Image,
  Segment,
  Button,
  Header,
  Modal,
  List,
} from "semantic-ui-react";
import { DrinkMenu } from "../data/DrinkMenu";

export const ErrorModal = (props) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open} //this leaves it open
      >
        <Modal.Header>OOOPS!</Modal.Header>
        <Modal.Content image>
          <Image
            size="medium"
            src={
              "https://image.freepik.com/free-vector/oops-explosion-vector_53876-17099.jpg"
            }
            wrapped
          />
          <Modal.Description>
            <Header>{props.error}</Header>
            Choose a random drink or start over below!
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content=" FEELIN LUCKY"
            labelPosition="left"
            icon="shuffle"
            onClick={() => setOpen(false)}
            href={"/random"}
            className="bttnClock"
          />
          <Button
            content="TAKE ME DRUNK I'M HOME"
            labelPosition="right"
            icon="home"
            onClick={() => setOpen(false)}
            href={"/"}
            className="bttnCoClock"
          />{" "}
        </Modal.Actions>
      </Modal>
    </>
  );
};
