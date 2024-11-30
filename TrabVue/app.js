new Vue({
    el: "#app",
    data: {
      apiKey: "cb3dbef042c49e1541724a965550514d",
      currentPage: "home",
      searchQuery: "",
      movies: [],
      loading: false,
      error: null,
    },
    methods: {
      fetchMovies() {
        if (!this.searchQuery) {
          this.error = alert("Insira uma palavra para busca.");
          return;
        }
  
        this.loading = true;
        this.error = null;
  
        axios.get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
              api_key: this.apiKey,
              query: this.searchQuery,
            },
          })
          .then(response => {
            this.movies = response.data.results;
          })
          .catch(error => {
            this.error = "Erro ao buscar filmes. Tente novamente.";
          })
          .finally(() => {
            this.loading = false;
          });
      },
  }});
  