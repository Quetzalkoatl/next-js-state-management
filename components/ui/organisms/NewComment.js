import { useDispatch, useSelector } from 'react-redux';

import { selectAuthUser } from '../../../store/slices/authSlice';
import { addComment } from '../../../store/slices/commentSlice';
import { setAuthState } from '../../../store/slices/authSlice';

import Avatar from '../atoms/Avatar';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

export default function NewComment() {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);

  // Updated function
  function handleNewComment(e) {
    e.preventDefault();
    dispatch(
      addComment({
        comment: e.target.comment.value,
        username: user,
      })
    );
    e.target.comment.value = '';
  }

  return (
    <section>
      <form
        className='flex space-x-2 items-center h-full'
        onSubmit={handleNewComment}
      >
        <Avatar />
        <div className='input-box'>
          <Input
            id={`comment`}
            type={`text`}
            placeholder={`${user}'s comment`}
          />
        </div>
        <Button type={`submit`}>send</Button>
      </form>
      <div className='py-2'>
        {/* Logout button - updated */}
        <Button onClick={() => dispatch(setAuthState(false))}>logout</Button>
      </div>
    </section>
  );
}
