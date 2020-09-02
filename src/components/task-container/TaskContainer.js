import React, { useEffect, useState } from 'react';
import { Container } from '../container/Container';
import { firestore } from '../../firebase/firebase.utils';

const TaskContainer = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [dataTask, setDataTask] = useState(null);

  useEffect(() => {
    firestore.collection('tasks').doc(id).get()
      .then((doc) => {
        if (doc.exists) {
          setDataTask(doc.data());
        } else {
          console.log('No such document!');
        }
      })
      .catch(error => {
        console.log('Error getting document:', error);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    loading
      ? <div>Loading...</div>
      : <Container
          dustbinsData={dataTask.dustbins}
          boxesData={dataTask.boxes}
        />
  );
};

export default TaskContainer;