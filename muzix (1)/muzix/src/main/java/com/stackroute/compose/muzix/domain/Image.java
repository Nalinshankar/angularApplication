package com.stackroute.compose.muzix.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

public class Image {
    @Document(collection = "track")
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public class Track {

        @Id
        private String imageId;
        @JsonProperty("text")
        private String imageName;
        @JsonProperty("url")
        private String imageurl;
    }
}
