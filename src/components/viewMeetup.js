import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { FaComment, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { avatar_image } from "../helpers/helper";

export class viewMeetup extends Component {
  constructor() {
    super();
  }

  render() {
    let meetup = this.props.meetup.meetup[0];
    let questions = this.props.meetup.questions;
    var image;
    if (meetup.id % 2 == 0) {
      image = "https://s3.envato.com/files/188307997/1.jpg";
    } else {
      image =
        "https://cdn.dribbble.com/users/1807056/screenshots/4666838/dribbble_404.png";
    }

    if (questions) {
      var questionList = questions.map(question => {
        return question ? (
          <div data-test="questions" key={question.questions_id}>
            <div id="questions-title">
              <h2 className="meetup-title text-black">Questions</h2>
            </div>
            <div
              id="notification"
              className="alert alert-danger"
              role="alert"
            />
            <div id="questions"> </div>
            <div className="question">
              <div className="meetup-item">
                <div className="m-detail">
                  <div className="m-time">
                    <img src={avatar_image} alt="Avatar" />
                    <span className="q-name">{question.username}</span>
                    <span className="q-time" />
                  </div>
                  <div className="m-content">
                    <p>{question.body}</p>
                    <div className="q-reaction">
                      <span>
                        <a
                          className="upvote-${question.questions_id}"
                          id="${question.questions_id}"
                          href="#"
                        >
                          <FaThumbsUp /> upvote{" "}
                          <small>({question.upvotes})</small>
                        </a>
                      </span>
                      <span>
                        <a
                          className="downvote-${question.questions_id}"
                          id="${question.questions_id}"
                          href=""
                        >
                          <FaThumbsDown /> downvote{" "}
                          <small>({question.downvotes})</small>
                        </a>
                      </span>
                      <span>
                        <a
                          className="comment-${question.questions_id}"
                          id="${question.questions_id}"
                          href="#"
                        >
                          <FaComment /> view comments
                        </a>
                      </span>
                    </div>
                    <div id="comments" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div data-test="no-questions"></div>
        );
      });
    } else {
      questionList = (
        <div data-test="empty-questions" className="question"></div>
      );
    }

    return (
      <div>
        <div>
          <h2 className="meetup-title">{meetup.topic}</h2>
        </div>
        <div className="meetup">
          <div className="meetup-container">
            <div className="meetup-item">
              <div className="m-img">
                <img src={image} alt="Avatar" />
              </div>
            </div>
            <div className="meetup-item">
              <div className="m-detail">
                <div className="m-time">{meetup.happening_on}</div>
                <div className="m-content">
                  <p>{meetup.body}</p>
                </div>
                <div className="m-location">
                  <strong>Venue:</strong>
                  {meetup.location}
                </div>
              </div>
            </div>
          </div>
        </div>
        {questionList}

        <div>
          <h2 className="meetup-title text-black">Ask a Question</h2>
        </div>
        <div className="question post-question">
          <div className="meetup-item">
            <div className="m-detail">
              <div className="m-content">
                <form id="question-form">
                  <textarea
                    name="description"
                    id="body"
                    placeholder="Enter Question..."
                    required
                  />

                  <div className="form-btn">
                    <button className="submit" id="submit" type="submit">
                      Post Question
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    meetup: state.meetup
  };
};

export default withRouter(connect(mapStateToProps)(viewMeetup));
