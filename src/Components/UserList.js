import React from 'react';
import {
    List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography,
    Card, CardContent, CardActions, Button, Tooltip
} from '@material-ui/core';
import { Jumbotron, Row, Col } from 'react-bootstrap';

class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            userList: [
                { name: "Irfan1", image: '' },
                { name: "Irfan2", image: '' },
                { name: "Irfan3", image: '' }
            ]
        }
    }

    userProfille() {
        console.log("User profile..")
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <Row>
                        <Col sm='3'></Col>
                        <Col sm='6'>
                            <Card>
                                <Typography component="h5" variant="h5" style={{ paddingLeft: "16px", paddingTop: "16px" }}>
                                    Live From Space
                                </Typography>
                                <List>
                                    {
                                        this.state.userList.map((item, index) =>
                                            <Tooltip title={item.name} aria-label="add" key={index} >
                                                <div className="pointer-div"
                                                    onClick={() => this.userProfille()}
                                                >
                                                    <ListItem alignItems="flex-start">
                                                        <ListItemAvatar>
                                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                                        </ListItemAvatar>
                                                        <ListItemText style={{ paddingTop: "10px" }}
                                                            primary={item.name}
                                                        />
                                                    </ListItem>
                                                    <Divider variant="inset" component="li" />
                                                </div>
                                            </Tooltip>
                                        )
                                    }
                                </List>
                            </Card>
                        </Col>
                        <Col sm='3'></Col>
                    </Row>
                </Jumbotron>
            </div>
        )
    }
}

export default UserList;