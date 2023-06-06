import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCommentAction } from '../../../Redux/Reducer/AppChatReducer'
const DemoHookRedux = () => {

    const arrayComment = useSelector(state => state.appChatReducer.comments)
    const dispatch = useDispatch();
    const userCommentRef = useRef({
        name: "",
        content: ""
    })
    const handleChange = e => {
        let { id, value } = e.target;
        userCommentRef.current[id] = value
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(userCommentRef.current);
        // đưa dữ liệu comment lên reducer
        const action = addCommentAction(userCommentRef.current);
        dispatch(action)
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    {arrayComment.map((userComment, index) => {
                        return <div className="d-flex mt-2" key={index}>
                            <img height={75} src={`https://i.pravatar.cc?u=${index}`} alt='' />
                            <div className="m-2">
                                <h3>{userComment.name}</h3>
                                <p>{userComment.content}</p>
                            </div>
                        </div>
                    })}
                </div>

                <div className="card-body">
                    <form className='form' onSubmit={handleSubmit}>
                        <div className="form-group">
                            <p>Name</p>
                            <input type="text" id='name' className='form-control' onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <p>Content</p>
                            <input type="text" id='content' className='form-control' onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <button className='btn btn-success'>Post</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default DemoHookRedux