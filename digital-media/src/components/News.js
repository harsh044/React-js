import React, { Component } from "react";
import Loader from "./Loader";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
      totalarticle: 0,
    };
    document.title = `DigitalMedia - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }

  updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=20`;
    // console.log(url)
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedata = await data.json();
    // console.log(parsedata);
    this.setState({
      article: parsedata.articles,
      totalarticle: parsedata.totalResults,
      loading: false,
    });
  };
  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=20`;
    // console.log(url)
    let data = await fetch(url);
    let parsedata = await data.json();
    // console.log(parsedata)
    this.setState({
      article: this.state.article.concat(parsedata.articles),
      totalarticle: parsedata.totalResults,
    });
  };

  render() {
    return (
      <>
        <h2 className="text-center" style={{ marginTop: "80px" }}>
          Digital-Media from {this.capitalizeFirstLetter(this.props.category)}
        </h2>
        {this.state.loading && <Loader />}

        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalarticle}
          loader={<Loader />}
        >
          <div className="container">
            <div className="row">
              {this.state.article.map((element) => {
                return (
                  <div className="col-md-4 col-sm-12 my-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 35) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 80)
                          : ""
                      }
                      imgurl={element.urlToImage}
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
