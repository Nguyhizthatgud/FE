import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';

function Credential() {
    return (
        <Container className='col'>
            <div className='pt-5 d-flex justify-content-around position-relative border-bottom'>
                <Link to='/'>
                    <Button className='mt-3 position-absolute start-0 translate-middle-y' variant="outline-warning fw-bold  btn-sm opacity-75"><i className="bi bi-arrow-left-circle-fill"></i></Button>{' '}
                </Link>
                <span className='text-uppercase fw-bold fs-4'>Thông tin tài khoản</span>
                <div></div>
            </div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <form className='my-4'>

                    </form>
                </CardContent>
            </Card>

        </Container>
    )
}

export default Credential
