import React from 'react';
import ReactDOM from 'react-dom';
import faker from '@faker-js/faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail author="Sam" timeAgo="Today at 4:15 PM" commentText="It was Awesome!" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail author="Jane" timeAgo="Today at 6:02 PM" commentText="Nice blog post." avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail author="Mads" timeAgo="Yesterday at 8:09 AM" commentText="Fantastic post" avatar={faker.image.avatar()} />
            </ApprovalCard>


        </div>
    );
}


ReactDOM.render(<App />, document.querySelector('#root'));