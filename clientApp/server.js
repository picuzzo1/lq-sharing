app.use(express.static('./dist/lq-sharing'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/<name-on-package.json>/'}
  );
});

app.listen(process.env.PORT || 8080);