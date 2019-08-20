import React from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import User from './User'

class UserMap extends React.Component {
  state = {
    userList: [], 
    fetchingData: false,
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({fetchingData:true})
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
          console.log(res.data)
          this.setState({userList: res.data, fetchingData:false})
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
        <div className='user-list'>
                {this.state.fetchingData && (
                <div className="key spinner">
                    <Loader type="Puff" color="#204963" height="60" width="60" />
                    <p>Loading Data</p>
                </div>
                )}
            {this.state.userList.map(user => <User key={user.id} user={user} />)}
        </div>
    );
  }
}

export default UserMap;
