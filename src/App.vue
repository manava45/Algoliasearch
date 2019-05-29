<template>
  <div id="app" class="container-fluid">
    <ais-index appId="QA62L6XXIY" apiKey="3dc6d12f33a356f7a5f5e77d241d2263">
      <div class="row">
        <div class="col-md-2 col-sm-3">
          <h1 class="head-title">ND SEARCH</h1>
        </div>
        <div class="col-md-10 col-sm-9">
          <ais-search-box>
            <div class="input-group">
              <ais-input
                placeholder="Search NDs by name or address..."
                :classNames="{
                  'ais-input': 'form-control'
                  }"
              />

              <span class="input-group-btn">
                <ais-clear :classNames="{'ais-clear': 'btn btn-default'}">
                  <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                </ais-clear>
                <button class="btn btn-default" type="submit">
                  <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                </button>
              </span>
            </div>
            <!-- /input-group -->
          </ais-search-box>
        </div>
      </div>

      <div class="row">
        <div class="col-md-10 col-sm-9">
          <div class="search-controls form-inline">
            <ais-sort-by-selector
              :indices="[
                {name: 'ndsearch', label: 'ndsearch'},
           //     {name: 'instant_search_price_asc', label: 'Lowest price'},
             //   {name: 'instant_search_price_desc', label: 'Highest price'}
              ]"
              :classNames="{
                'ais-sort-by-selector': 'form-control'
              }"
            />

            <ais-results-per-page-selector
              :options="[12, 24, 48]"
              :classNames="{
                'ais-results-per-page-selector': 'form-control'
              }"
            />

            <ais-stats/>
          </div>

          <ais-results>
            <template slot-scope="{ result }">
              <div class="search-result">
                <div class="result__info">
                  <h2 class="result__name">
                    <ais-highlight
                      :result="result"
                      attribute-name="Provider Organization Name (Legal Business Name)"
                    />
                  </h2>
                  <div class="result__type">
                    <ais-highlight :result="result" attribute-name="Provider Business Mailing Address Telephone Number"/>
                  </div>
                  </div>
              </div>
            </template>
          </ais-results>

          <ais-no-results/>

          <ais-pagination
            class="pagination"
            :classNames="{
              'ais-pagination': 'pagination',
              'ais-pagination__item--active': 'active',
              'ais-pagination__item--disabled': 'disabled'
            }"
            v-on:page-change="onPageChange"
          />
        </div>
      </div>
    </ais-index>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    onPageChange() {
      window.scrollTo(0, 0);
    }
  }
};
</script>


<style lang="scss" rel="stylesheet/scss">
#app {
  -webkit-font-smoothing: antialiased;
  padding-top: 20px;
}

.head-title {
  margin-top: 0;
}

.ais-powered-by {
  float: right;

  line-height: 26px;
  svg {
    vertical-align: bottom;
  }
}

.search-controls {
  padding-bottom: 20px;
}

.ais-stats {
  line-height: 36px;
}

.ais-results:after {
  content: " ";
  display: block;
  clear: both;
}

.search-result {
  padding: 10px 20px 20px;
  width: 24%;
  margin-bottom: 10px;
  border: solid 1px #eee;
  box-shadow: 0 0 3px #f6f6f6;
  margin-right: 1%;
  position: relative;
  border-radius: 3px;
  min-width: 220px;
  background: #fff;
  display: inline;
  float: left;
  transition: all 0.5s;
}

.result__info {
  position: absolute;
  width: 100%;
  padding: 0px 20px 20px;
  bottom: 0;
  left: 0;
}

.result__image {
  margin-bottom: 100px;
  height: 150px;
}

.result__name {
  font-size: 14px;
  font-weight: bold;
}

.result__name mark,
.result__type mark {
  font-style: normal;
  background: rgba(143, 187, 237, 0.1);
  box-shadow: inset 0 -1px 0 0 rgba(69, 142, 225, 0.8);
}

.result__type mark {
  background: rgba(143, 187, 237, 0.1);
  border-radius: 0;
  box-shadow: inset 0 -1px 0 0 rgba(69, 142, 225, 0.8);
}

.result__price {
  font-size: 25px;
  font-weight: bold;
  position: absolute;
  right: 20px;
  bottom: 16px;
}

.result__type {
  color: #a2a2a2;
  font-size: 12px;
}

.result__rating {
  margin-top: 10px;
}

.result__star {
  width: 1em;
  height: 1em;
}

.result__star:before {
  content: "\2605";
  color: #fbae00;
}

.result__star--empty:before {
  content: "\2606";
  color: #fbae00;
}

/* Sort by selector */
.search-controls {
  .form-control {
    float: right;
    margin-left: 10px;
  }
}
.ais-sort-by-selector {
  float: right;
}

.ais-results-per-page-selector {
  float: right;
  margin-right: 10px;
}

/* Clear Search */
.ais-clear--disabled {
  display: none;
}

/* Price Range */
.ais-price-range__input--from,
.ais-price-range__input--to {
  width: 65px;
  display: inline-block;
}
</style>
