import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgurl, newsurl, author, date } = this.props;
    return (
      <div>
        <div className="card text-white bg-secondary">
          <img height="250"
            src={
              !imgurl
                ? "https://cdn.pixabay.com/photo/2017/01/01/11/19/interior-1944348_960_720.jpg"
                : imgurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-white">
                By-{!author ? "Unknown" : author} On-
                {new Date(date).toDateString()}
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
