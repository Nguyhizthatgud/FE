import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Room.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
function Room({ showToast }) {
    const [dataroom, dataroomchange] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/dataroom')
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error: ${res.status}`);
                }
                return res.json();
            })
            .then(resp => {
                dataroomchange(resp);
                showToast(resp, 'success');
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);
    return (

        <Container className='col bg-body-tertiary'>
            <div className="head-bar pt-5 d-flex justify-content-between">

                <span className='text-uppercase fw-bold fs-4'>Vị trí</span>
                <Link to='/createroom'>
                    <Button variant="contained" color='success' size="medium" sx={{ fontWeight: 2 }} ><i class="bi fa-3x bi-plus"></i>Thêm thiết bị</Button>{' '}
                </Link>

            </div>
            <ToastContainer limit={2} />
            <div className="badge-button mt-3 gx-3">
                <button className="btn btn-outline-secondary btn-sm me-3">
                    Tổng số thiết bị <span className="badge text-bg-secondary">4</span>
                </button>
                <button className="btn btn-outline-secondary  btn-sm">
                    Thiết bị đang hoạt động <span className="badge text-bg-secondary">4</span>
                </button>
            </div>
            <div className="table-devices pt-4">


                <table className="table table-hover table-sm ">
                    <thead>
                        <tr className='table-warning'>
                            <th >TT</th>
                            <th >Vị trí</th>
                            <th >Mô tả</th>
                            <th >Thời gian khởi tạo</th>
                            <th >Hoạt động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataroom && dataroom.length > 0 ?
                                // Dataroom && Dataroom.length > 0 ?
                                dataroom && dataroom.map(item => {

                                    return (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>

                                            <td role='button' className='text-warning'>{item.name}</td>
                                            <td >{item.description}</td>
                                            <td >{item.timeCreated}</td>
                                            <td >
                                                <ButtonGroup variant="text" aria-label="outlined button group">
                                                    <Button size="small" onClick={() => alert(item.id)}><i class="bi fa-2x bi-pencil"></i></Button>
                                                    <Button size="small"><i class="bi fa-2x bi-trash" onClick={() => alert(item.id)}></i></Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                < tr >
                                    <td colSpan={5} className="text-center">
                                        <Stack sx={{ width: '100%' }} spacing={2}>
                                            <Alert severity="info">Chưa có thiết bị nào trong phòng | <b>Nhấn 'Thêm thiết bị' để tạo thiết bị mới</b></Alert>
                                        </Stack>
                                    </td>
                                </tr>
                        }
                    </tbody>
                </table>

            </div>


        </Container >



    );
}

export default Room
