import React from 'react';
import {connect} from "react-redux";
import {Button, Container, Form, Input, InputGroup} from "reactstrap";
import {getShortLink, linkChange} from "../../store/actions/urlActions";

const Main = props => {
    const postOriginalLink = (e) => {
        e.preventDefault();
        props.getShortLink({link: props.myLink});
    };
    return (
        <Container className='text-center'>
            <h2 className='my-4'>Shorten your link here</h2>
            <Form onSubmit={postOriginalLink} className='my-3'>
                <InputGroup className='w-50 mx-auto'>
                    <Input className='my-3' type='text' value={props.myLink} onChange={(e) => props.onLinkChange(e.target.value)}/>
                </InputGroup>
                <Button type='submit' color='primary'>Shorten url</Button>
            </Form>
            {props.shortLink && (
                <div>
                    <p>Here is your link</p>
                    <a href={'http://localhost:8000/' + props.shortLink} target='_blank'>http://localhost:8000/{props.shortLink}</a>
                </div>
            )}
        </Container>
    );
};

const mapStateToProps = state => ({
    shortLink: state.shortLink,
    myLink: state.myLink
});
const mapDispatchToProps = dispatch => ({
    onLinkChange: link => dispatch(linkChange(link)),
    getShortLink: link => dispatch(getShortLink(link))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
