package tr.gov.tuik.zk;

import java.util.UUID;

/**
 * Created by Hasan TEKGÜL
 * on 13.12.2015.
 */
public class Item {

    private String key;
    private String title;
    private String description;
    private int voteCount;

    public Item() {
    }

    public Item(String title, String description, int voteCount) {
        this.key = UUID.randomUUID().toString();
        this.title = title;
        this.description = description;
        this.voteCount = voteCount;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getVoteCount() {
        return voteCount;
    }

    public void setVoteCount(int voteCount) {
        this.voteCount = voteCount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Item ıtem = (Item) o;

        return key.equals(ıtem.key);

    }

    @Override
    public int hashCode() {
        return key.hashCode();
    }

    @Override
    public String toString() {
        return "{" +
                "key: '" + key + '\'' +
                ", title: '" + title + '\'' +
                ", description: '" + description + '\'' +
                ", voteCount: " + voteCount +
                '}';
    }
}
