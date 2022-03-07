import React from 'react'
import { Button, Form, Input, Layout } from 'antd'
import { useMutation } from '@apollo/client'
import { CREATE_EVENT } from 'queries'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

export const CreateEvent = () => {
  const [createEvent, { loading }] = useMutation(CREATE_EVENT)

  const onFinish = (values) => {
    createEvent({
      variables: {
        ...values,
        location_id: 1,
        user_id: 1
      }
    })
  }

  return (
    <Layout style={styles.container}>
      <Form
        name='createEvent'
        onFinish={onFinish}
        {...layout}
      >
        <Form.Item name='title' label='Title'>
          <Input />
        </Form.Item>
        <Form.Item name='desc' label='Description'>
          <Input />
        </Form.Item>
        <Form.Item name='date' label='Date'>
          <Input placeholder='yyyy-mm-dd' />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit' loading={loading}>
            Add
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  )
}

const styles = {
  container: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    border: '1px solid #99999940',
    borderRadius: 3,
    marginBottom: 32
  }
}
