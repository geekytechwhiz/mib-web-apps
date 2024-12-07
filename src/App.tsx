import { Button, List, ListItem, ListItemText, TextField } from "@mui/material";
import React, { useState } from "react";

interface ReviewProps {
  contentId: string;
  content: React.ReactNode;
  position: { x: number; y: number };
}

interface CommentFormProps {
  onSubmit: (content: string) => void;
}

interface CommentListProps {
  comments: Comment[];
  onCommentClick: (position: { x: number; y: number }) => void;
}


interface Comment {
  id: string;
  content: string;
  position: { x: number; y: number };
  reviewer: string;
}

interface ReviewIconProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Add a comment"
        value={comment}
        onChange={(e: any) => setComment(e.target.value)}
        multiline
        rows={2}
        variant="outlined"
      />
      <Button variant="contained" color="primary" type="submit">
        Add Comment
      </Button>
    </form>
  );
};

const CommentList: React.FC<CommentListProps> = ({
  comments,
  onCommentClick,
}) => {
  return (
    <List>
      {comments.map((comment) => (
        <ListItem
          key={comment.id}
          button
          onClick={() => onCommentClick(comment.position)}>
          <ListItemText
            primary={comment.content}
            secondary={`By ${comment.reviewer}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

const Review: React.FC<ReviewProps> = ({ contentId, content, position }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  const handleAddComment = (content: string) => {
    const newComment: Comment = {
      id: `${contentId}-${comments.length + 1}`,
      content,
      position,
      reviewer: "Reviewer",
    };
    setComments((prevComments) => [...prevComments, newComment]);
  };

  const handleCommentClick = (position: { x: number; y: number }) => {
    // Not implemented in this example, you can handle the comment click event as per your requirement
    console.log("Comment clicked:", position);
  };

  return (
    <div style={{ position: "absolute", top: position.y, left: position.x }}>
      <h2>Content</h2>
      {content}

      <h2>Review Comments</h2>
      <CommentForm onSubmit={handleAddComment} />

      <h3>Comments</h3>
      <CommentList comments={comments} onCommentClick={handleCommentClick} />
    </div>
  );
};

const ReviewIcon: React.FC<ReviewIconProps> = ({ onClick }) => {
  return (
    <div style={{ position: "fixed", top: 0, right: 0 }}>
      <button onClick={onClick}>Review</button>
    </div>
  );
};

const App: React.FC = () => {
  const [reviewPosition, setReviewPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [showReview, setShowReview] = useState(false);

  const handleReviewClick = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    setReviewPosition({ x: clientX, y: clientY });
    setShowReview(true);
  };

  return (
    <div>
      <h1>Application</h1>

      <ReviewIcon onClick={handleReviewClick} />

      {showReview && (
        <Review
          contentId="content1"
          content={<div>This is the content description.</div>}
          position={reviewPosition}
        />
      )}
    </div>
  );
};

export default App;
