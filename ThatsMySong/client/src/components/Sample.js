import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

const Sample = ({ sample }) => {
   const navigate = useNavigate();
    return (
        <Card >
            <CardBody>
                <h3>{sample?.song?.title}</h3>
                
                <ul>
                    <li><b>Album:</b> {sample?.song?.albumName}</li>
                    <li><b>Artist: </b>{sample?.song?.artistName}</li>
                    {/* <li><b>Genre: </b>{sample?.genre?.name}</li> */}
                </ul>

                <h3>{sample?.sampledSong?.title}</h3>
                <ul>
                    <li><b>Album:</b> {sample?.sampledSong?.albumName}</li>
                    <li><b>Artist: </b>{sample?.sampledSong?.artistName}</li>
                    <li><b>Genre: </b>{sample?.sampledSong?.genre?.name}</li>
                </ul>
                <button onClick={() => navigate(`/samples/${sample.id}/edit`)}>Edit Sample </button>
            </CardBody>
        </Card>
    );
};

export default Sample;