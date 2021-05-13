
<EditForm
  handleChange={this.props.handleChange}
  editPost={this.props.editPost}
  post={post}
></EditForm>
<form onSubmit={this.props.deletePost} value={post._id}>
    <input type="submit" value="Delete" />
</form>
