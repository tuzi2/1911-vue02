<template>
  <div class="Search">

    <div class="wrapper-sticky-footer">
      <div class="content-sticky">
        <!-- Header -->
        <header id="header" class="header">
          <div class="header__top">
            <div class="container">
              <div class="row">
                <div class="col-sm-3">
                  <div class="wrap-logo">
                    <a href="index.html" class="logo"></a>
                  </div>
                </div>
                <div class="col-sm-offset-2 col-md-offset-5 col-sm-6 col-md-4 hidden-xs">
                  <div class="col-xs-4 col-sm-5">
                    <div class="weather">
                      <div class="weather__temperature">
                        <span class="icon-sun"></span>
                        <em class="active">+8 C</em>
                        <em>+2 C</em>
                        <em>+3 C</em>
                      </div>
                      <div class="weather__city">
                        <em>London</em>
                        <div class="weather__city__list">
                          <ul>
                            <li class="active">
                              <a href="#">London</a>
                            </li>
                            <li>
                              <a href="#">Moscow</a>
                            </li>
                            <li>
                              <a href="#">Kiev</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-6 col-sm-7">
                    <div class="exchange">
                      <p class="exchange__name">Central Bank Rate</p>
                      <p class="exchange__course">
                        $<span>32.32</span>&#8364;<span>28.23</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="wsmenucontent overlapblackbg"></div>
          <div class="wsmenuexpandermain slideRight">
            <a id="navToggle" class="animated-arrow slideLeft">
              <span></span>
            </a>
          </div>
          <div class="header_down">
            <div class="container">
              <div class="wrapper clearfix bigmegamenu">
                <!--Main Menu HTML Code-->
                <nav class="wsmenu slideLeft clearfix">
                  <ul class="mobile-sub wsmenu-list">
                    <li class="visible-xs">
                      <form class="navbar-form mob_search" role="search">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Search">
                        </div>
                        <button type="submit" class="btn btn-search">
                          <i class="icon-search"></i>
                        </button>
                      </form>
                    </li>

                    <li class="active">
                      <span class="wsmenu-click"></span>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <span class="wsmenu-click"></span>
                      <a href="category.html">Policy</a>
                    </li>
                    <li>
                      <span class="wsmenu-click"></span>
                      <a href="category.html">Sport</a>
                    </li>
                    <li>
                      <span class="wsmenu-click"></span>
                      <a href="category.html">Holidays</a>
                    </li>
                    <li>
                      <span class="wsmenu-click"></span>
                      <a href="category.html">Religion</a>
                    </li>
                    <li>
                      <span class="wsmenu-click"></span>
                      <a href="category.html">People</a>
                    </li>
                    <li>
                      <span class="wsmenu-click"></span>
                      <a href="category.html">Main</a>
                    </li>
                    <li>
                      <span class="wsmenu-click"></span>
                      <a href="">Other
                        <span class="arrow"></span>
                      </a>
                      <ul class="wsmenu-submenu">
                        <li>
                          <a href="404.html">404 page</a>
                        </li>
                        <li>
                          <a href="category.html">Category page</a>
                        </li>
                        <li>
                          <a href="news.html">News page</a>
                        </li>
                        <li>
                          <a href="search-result.html">Search result</a>
                        </li>
                        <li>
                          <a href="full-width.html">Full width</a>
                        </li>
                      </ul>
                    </li>
                    <li class="navbar-right hidden-xs">
                      <form class="navbar-form " role="search">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Search">
                        </div>
                        <button type="submit" class="btn btn-search">
                          <i class="icon-search"></i>
                          <br>Search
                        </button>
                      </form>
                    </li>
                    <li>
                      <div class="visible-xs col-sm-offset-5 col-sm-4">
                        <div class="col-sm-5">
                          <div class="weather">
                            <div class="weather__temperature">
                              <span class="icon-sun"></span>
                              <em>+8 C</em>
                            </div>
                            <div class="weather__city">
                              <em>London</em>
                              <div class="weather__city__list">
                                <ul>
                                  <li class="active">
                                    <a href="#">London</a>
                                  </li>
                                  <li>
                                    <a href="#">Moscow</a>
                                  </li>
                                  <li>
                                    <a href="#">Kiev</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-7">
                          <div class="exchange">
                            <p class="exchange__name">Central Bank Rate</p>
                            <p class="exchange__course">
                              $<span>32.32</span>&#8364;<span>28.23</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
                <!--Menu HTML Code-->
              </div>
            </div>
          </div>
        </header>
        <!-- END header -->
        <!-- content-->
        <div class="wrap wrap_gray pt20">
          <div class="container">
            <div class="row">
              <div class="col-sm-3">
                <div class="thumbnail thumbnail_small">
                  <a href="news.html" class="thumbnail__link">
                    <img src="@/assets/static/img/content/news2.jpg" height="153" width="270" alt="News">
                  </a>
                  <div class="caption thumbnail__caption">
                    <div class="news caption__news">
                      <p class="news__category yellow-line">Economy</p>
                      <a href="news.html" class="news__link">
                        <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                      </a>
                    </div>
                    <div class="posted">
                      <span class="posted__date">today, 12:30</span>
                      <ul class="posted__icon">
                        <li>
                                                    <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                        </li>
                        <li>
                                                    <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="thumbnail thumbnail_small">
                  <a href="news.html" class="thumbnail__link">
                    <img src="@/assets/static/img/content/news3.jpg" height="153" width="270" alt="News">
                  </a>
                  <div class="caption thumbnail__caption">
                    <div class="news caption__news">
                      <p class="news__category yellow-line">Economy</p>
                      <a href="news.html" class="news__link">
                        <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                      </a>
                    </div>
                    <div class="posted">
                      <span class="posted__date">today, 12:30</span>
                      <ul class="posted__icon">
                        <li>
                                                    <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                        </li>
                        <li>
                                                    <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="thumbnail thumbnail_small">
                  <a href="news.html" class="thumbnail__link">
                    <img src="@/assets/static/img/content/news4.jpg" height="153" width="270" alt="News">
                  </a>
                  <div class="caption thumbnail__caption">
                    <div class="news caption__news">
                      <i class="icon-play"></i>
                      <p class="news__category yellow-line">Economy</p>
                      <a href="news.html" class="news__link">
                        <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                      </a>
                    </div>
                    <div class="posted">
                      <span class="posted__date">today, 12:30</span>
                      <ul class="posted__icon">
                        <li>
                                                    <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                        </li>
                        <li>
                                                    <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="thumbnail thumbnail_small">
                  <a href="news.html" class="thumbnail__link">
                    <img src="@/assets/static/img/content/news5.jpg" height="153" width="270" alt="News">
                  </a>
                  <div class="caption thumbnail__caption">
                    <div class="news caption__news">
                      <p class="news__category yellow-line">Economy</p>
                      <a href="news.html" class="news__link">
                        <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                      </a>
                    </div>
                    <div class="posted">
                      <span class="posted__date">today, 12:30</span>
                      <ul class="posted__icon">
                        <li>
                                                    <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                        </li>
                        <li>
                                                    <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="thumbnail thumbnail_small">
                  <a href="news.html" class="thumbnail__link">
                    <img src="@/assets/static/img/content/news6.jpg" height="153" width="270" alt="News">
                  </a>
                  <div class="caption thumbnail__caption">
                    <div class="news caption__news">
                      <i class="icon-play"></i>
                      <p class="news__category yellow-line">Economy</p>
                      <a href="news.html" class="news__link">
                        <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                      </a>
                    </div>
                    <div class="posted">
                      <span class="posted__date">today, 12:30</span>
                      <ul class="posted__icon">
                        <li>
                                                    <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                        </li>
                        <li>
                                                    <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="thumbnail thumbnail_small">
                  <a href="news.html" class="thumbnail__link">
                    <img src="@/assets/static/img/content/news7.jpg" height="153" width="270" alt="News">
                  </a>
                  <div class="caption thumbnail__caption">
                    <div class="news caption__news">
                      <p class="news__category yellow-line">Economy</p>
                      <a href="news.html" class="news__link">
                        <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                      </a>
                    </div>
                    <div class="posted">
                      <span class="posted__date">today, 12:30</span>
                      <ul class="posted__icon">
                        <li>
                                                    <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                        </li>
                        <li>
                                                    <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="thumbnail thumbnail_small">
                  <a href="news.html" class="thumbnail__link">
                    <img src="@/assets/static/img/content/news8.jpg" height="153" width="270" alt="News">
                  </a>
                  <div class="caption thumbnail__caption">
                    <div class="news caption__news">
                      <i class="icon-play"></i>
                      <p class="news__category yellow-line">Economy</p>
                      <a href="news.html" class="news__link">
                        <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                      </a>
                    </div>
                    <div class="posted">
                      <span class="posted__date">today, 12:30</span>
                      <ul class="posted__icon">
                        <li>
                                                    <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                        </li>
                        <li>
                                                    <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="thumbnail thumbnail_small">
                  <a href="news.html" class="thumbnail__link">
                    <img src="@/assets/static/img/content/news9.jpg" height="153" width="270" alt="News">
                  </a>
                  <div class="caption thumbnail__caption">
                    <div class="news caption__news">
                      <p class="news__category yellow-line">Economy</p>
                      <a href="news.html" class="news__link">
                        <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                      </a>
                    </div>
                    <div class="posted">
                      <span class="posted__date">today, 12:30</span>
                      <ul class="posted__icon">
                        <li>
                                                    <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                        </li>
                        <li>
                                                    <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="thumbnail thumbnail_small">
                  <a href="news.html" class="thumbnail__link">
                    <img src="@/assets/static/img/content/news10.jpg" height="153" width="270" alt="News">
                  </a>
                  <div class="caption thumbnail__caption">
                    <div class="news caption__news">
                      <p class="news__category yellow-line">Economy</p>
                      <a href="news.html" class="news__link">
                        <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                      </a>
                    </div>
                    <div class="posted">
                      <span class="posted__date">today, 12:30</span>
                      <ul class="posted__icon">
                        <li>
                                                    <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                        </li>
                        <li>
                                                    <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="thumbnail thumbnail_small">
                  <a href="news.html" class="thumbnail__link">
                    <img src="@/assets/static/img/content/news11.jpg" height="153" width="270" alt="News">
                  </a>
                  <div class="caption thumbnail__caption">
                    <div class="news caption__news">
                      <p class="news__category yellow-line">Economy</p>
                      <a href="news.html" class="news__link">
                        <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                      </a>
                    </div>
                    <div class="posted">
                      <span class="posted__date">today, 12:30</span>
                      <ul class="posted__icon">
                        <li>
                                                    <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                        </li>
                        <li>
                                                    <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="thumbnail thumbnail_small">
                  <a href="news.html" class="thumbnail__link">
                    <img src="@/assets/static/img/content/news12.jpg" height="153" width="270" alt="News">
                  </a>
                  <div class="caption thumbnail__caption">
                    <div class="news caption__news">
                      <p class="news__category yellow-line">Economy</p>
                      <a href="news.html" class="news__link">
                        <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                      </a>
                    </div>
                    <div class="posted">
                      <span class="posted__date">today, 12:30</span>
                      <ul class="posted__icon">
                        <li>
                                                    <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                        </li>
                        <li>
                                                    <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="thumbnail thumbnail_small">
                  <a href="news.html" class="thumbnail__link">
                    <img src="@/assets/static/img/content/news13.jpg" height="153" width="270" alt="News">
                  </a>
                  <div class="caption thumbnail__caption">
                    <div class="news caption__news">
                      <p class="news__category yellow-line">Economy</p>
                      <a href="news.html" class="news__link">
                        <p class="news__text">CEO who jacked up price of AIDS pill to $750 faces major backlash</p>
                      </a>
                    </div>
                    <div class="posted">
                      <span class="posted__date">today, 12:30</span>
                      <ul class="posted__icon">
                        <li>
                                                    <span>
                                                <i class="icon-comment-empty"></i>29
                                            </span>
                        </li>
                        <li>
                                                    <span>
                                                <i class="icon-eye"></i>2.3k
                                            </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ajax_load">
            <i class="icon-arrows-cw"></i>Load more
            <svg width="128" height="40" viewBox="0 0 128 40" xmlns="http://www.w3.org/2000/svg">
              <rect x='0' y='0' fill='none' width='128' height='40'></rect>
            </svg>
          </div>
        </div>
        <!-- END content-->
      </div>
      <!-- Footer -->
      <footer class="footer slate_gray">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <p class="copyright">Copyright &copy; 2017.Company name All rights reserved.<a target="_blank" href="http://sc.chinaz.com/moban/">&#x7F51;&#x9875;&#x6A21;&#x677F;</a></p>
            </div>
            <div class="col-sm-6">
              <div class="social navbar-right">
                <p class="social__text">We are in social networks</p>
                <ul class="social__list">
                  <li class="social__item">
                    <a class="facebook" href="#">
                      <i class="icon-facebook"></i>
                    </a>
                  </li>
                  <li class="social__item">
                    <a class="twitter" href="#">
                      <i class="icon-twitter"></i>
                    </a>
                  </li>
                  <li class="social__item">
                    <a class="gplus" href="#">
                      <i class="icon-gplus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <!-- END Footer -->
    <!-- All JavaScript libraries -->
<!--    <script src="js/jquery.min.js"></script>-->
<!--    <script src="js/bootstrap.min.js"></script>-->
<!--    &lt;!&ndash; Custom JavaScript &ndash;&gt;-->
<!--    <script src="js/main.js"></script>-->



  </div>
</template>

<script>
  import "@/assets/static/css/css.css";
  import "@/assets/static/css/reset.css";
  import "@/assets/static/css/typography.css";
  import "@/assets/static/css/fontello.css";
  import "@/assets/static/css/bootstrap.min.css";
  import "@/assets/static/css/webslidemenu.css";
  import "@/assets/static/css/main.css"
  import "@/assets/static/js/jquery.min.js"
  import "@/assets/static/js/bootstrap.min.js"
  import "@/assets/static/js/main.js"

export default {
  name: 'Search',
  data () {
    return {

    }
  },
  // mounted(){
  //   assets.config({
  //     base:'@/assets/static/js'
  //   }).use('index',function(){
  //     var index=assets.index;
  //     index.banner()
  //     index.seachBtn()
  //     index.arrowutil()
  //   });
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
