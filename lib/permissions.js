// check that the user ID specified owns the documents
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}