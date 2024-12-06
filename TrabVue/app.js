new Vue({
    el: "#app",
    data: {
      apiKey: "cb3dbef042c49e1541724a965550514d",
      currentPage: "home",
      searchQuery: "",
      message: 'Mensagem enviada!',
      movies: [],
      loading: false,
      toast: {
        visible: false,
        message: 'Mensagem enviada!',
        type: "success"
      },
      url: ""
    },
    methods: {
      fetchMovies() {
        this.loading = true;
        if (this.searchQuery === "") {
          axios.get(`https://api.themoviedb.org/3/movie/popular`, {
            params: {
              api_key: this.apiKey
            },
          })
          .then(response => {
            this.movies = response.data.results
            this.loading = false
          })
          } else {
            axios.get(`https://api.themoviedb.org/3/search/movie`, {
              params: {
                api_key: this.apiKey,
                query: this.searchQuery,
              },
            })
            .then(response => {
              this.movies = response.data.results;
              this.loading = false;
            })
          }
      },
      showToast() {
        this.toast.message;
        this.toast.visible = true
        setTimeout(() => {
          this.toast.visible = false;
        }, 3000);
      },
      sendMessage() {
         this.currentPage = "home";
         this.showToast()
      }
  }});
  