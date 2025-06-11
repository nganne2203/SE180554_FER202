import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form, Nav } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './styles/main.scss';

// Validation schema
const schema = yup.object({
  firstName: yup.string().min(6, 'First name must be at least 6 characters').required('First name is required'),
  lastName: yup.string().min(6, 'Last name must be at least 6 characters').required('Last name is required'),
  status: yup.string().required('Status is required'),
  dueDate: yup.string().required('Due date is required'),
  // Permission fields are optional
  editPermission: yup.boolean(),
  deletePermission: yup.boolean(),
});

const TaskManager = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState('todo');
  const [tasks, setTasks] = useState([
    { id: 1, firstName: 'Jacob', lastName: '', description: '@fat', status: 'Jacob', createdAt: '@fat' },
    { id: 2, firstName: 'Larry', lastName: 'the Bird', description: '@twitter', status: 'Jacob', createdAt: '@fat' }
  ]);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const handleClose = () => {
    setShow(false);
    reset();
  };
  
  const handleShow = () => setShow(true);

  const onSubmit = (data) => {
    const newTask = {
      id: tasks.length + 1,
      firstName: data.firstName,
      lastName: data.lastName,
      description: data.description || '',
      status: data.status,
      createdAt: new Date().toLocaleDateString(),
      permissions: {
        edit: data.editPermission,
        delete: data.deletePermission
      }
    };
    setTasks([...tasks, newTask]);
    handleClose();
  };

  return (
    <div className="task-manager">
      <div className="header">
        <h1>FER202 - Mai Thi Thanh Ngan - SE180554</h1>
      </div>
      
      <div className="content">
        <div className="controls">
          <Nav variant="pills" className="filter-tabs">
            <Nav.Item>
              <Nav.Link 
                active={activeTab === 'todo'} 
                onClick={() => setActiveTab('todo')}
              >
                To do
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                active={activeTab === 'completed'} 
                onClick={() => setActiveTab('completed')}
              >
                Completed
              </Nav.Link>
            </Nav.Item>
          </Nav>
           </div>
        
        <div className="table-header">
          <Button variant="primary" onClick={handleShow} className="create-task-btn">
            Add Task
          </Button>
        </div>
        
        <div className="table-container">
             
          <Table className="task-table">
            <thead>
              <tr>
                <th>Actions</th>
                <th>Full Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
{tasks.map(task => (
                <tr key={task.id}>
                  <td>
                    <Button variant="link" size="sm" className="action-btn edit-btn">
                      <i className="fas fa-edit"></i>
                    </Button>
                    <Button variant="link" size="sm" className="action-btn delete-btn">
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                  <td>{task.firstName} {task.lastName}</td>
                  <td>{task.description}</td>
                  <td>{task.status}</td>
                  <td>{task.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="md" centered className="create-task-modal">
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className="modal-body-custom">
            <div className="form-group">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                {...register('firstName')}
                isInvalid={!!errors.firstName}
                className="form-control-custom"
              />
              {errors.firstName && (
                <div className="error-message">
                  {errors.firstName.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                {...register('lastName')}
                isInvalid={!!errors.lastName}
                className="form-control-custom"
              />
              {errors.lastName && (
                <div className="error-message">
                  {errors.lastName.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <Form.Label>Status</Form.Label>
              <Form.Select
                {...register('status')}
                isInvalid={!!errors.status}
                className="form-control-custom"
              >
                <option value="">Open this select menu</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </Form.Select>
              {errors.status && (
                <div className="error-message">
                  {errors.status.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Due Date"
                {...register('dueDate')}
                isInvalid={!!errors.dueDate}
                className="form-control-custom"
              />
              {errors.dueDate && (
                <div className="error-message">
                  {errors.dueDate.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <Form.Label>Permission</Form.Label>
              <div className="permission-checkboxes">
                <Form.Check
                  type="checkbox"
                  id="editPermission"
                  label="Edit"
                  {...register('editPermission')}
                  className="permission-checkbox"
                />
                <Form.Check
                  type="checkbox"
                  id="deletePermission"
                  label="Delete"
                  {...register('deletePermission')}
                  className="permission-checkbox"
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="modal-footer-custom">
            <Button variant="secondary" onClick={handleClose} className="btn-close">
              Close
            </Button>
            <Button variant="primary" type="submit" className="btn-save">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default TaskManager;
