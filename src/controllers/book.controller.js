exports.create = {
  GET: (req, res) => {
    res.status(403).json({
      method: "Book Create GET",
      status: "403 - Method GET Not allowed!"
    });
  },
  POST: (req, res) => {
    res.json({
      method: "Book Create POST",
      status: "Not implemented"
    });
  }
};

exports.update = {
  GET: (req, res) => {
    res.json({
      method: "Book Update GET",
      status: "Not implemented"
    });
  },
  POST: (req, res) => {
    res.json({
      method: "Book Update POST",
      status: "Not implemented"
    });
  }
};

exports.delete = {
  GET: (req, res) => {
    res.json({
      method: "Book Delete GET",
      status: "Not implemented"
    });
  },
  POST: (req, res) => {
    res.json({
      method: "Book Delete POST",
      status: "Not implemented"
    });
  }
};

exports.list = (req, res) => {
  res.json({
    method: "Book List GET",
    status: "Not implemented"
  });
};

exports.detail = (req, res) => {
  res.json({
    method: "Book Detail GET",
    status: "Not implemented"
  });
};