/* Reuse your BlogPost class
Create a Blog class which can:
store a list of BlogPosts
and has the following methods:
add(BlogPost) -> adds a BlogPost to the list
delete(int) -> deletes the BlogPost from the given index
update(int, BlogPost) -> replaces an item at the given index with a new BlogPost */

import { BlogPost } from "../../../Week09/Day05/BlogPost/BlogPost";

export class Blog{
    private blogList: BlogPost[] = [];

    add(BlogPost: BlogPost){
        this.blogList.push(BlogPost);
    }

    delete(indexOfBlogPost: number){
        this.blogList.splice(indexOfBlogPost,1)
    }

    update(indexOfBlogPost: number, BlogPost:BlogPost){
        this.blogList.splice(indexOfBlogPost,1,BlogPost)
    }
}