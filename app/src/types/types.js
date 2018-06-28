
export class NewPostType {
    constructor(id, timestamp, title, body, author, category) {
        this.id = id;
        this.timestamp = timestamp;
        this.title = title;
        this.body = body;
        this.author = author;
        this.category = category;
    };
}

export class NewCommentType {
    constructor(id, timestamp, body, author, parentId) {
        this.id = id;
        this.timestamp = timestamp;
        this.body = body;
        this.author = author;
        this.parentId = parentId;
    }
}