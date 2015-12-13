package tr.gov.tuik.zk;

import java.util.ArrayList;
import java.util.Collection;
import java.util.UUID;

/**
 * Created by Hasan TEKGÜL
 * on 13.12.2015.
 */
public class ItemService {
    private Collection<Item> items = new ArrayList<Item>();
    private static ItemService service = new ItemService();

    private ItemService() {
        initDummies();
    }

    private void initDummies() {
        Item item1 = new Item();
        item1.setTitle("Hello World!");
        item1.setDescription("Hello from the other side");
        item1.setVoteCount(50);
        item1.setKey(UUID.randomUUID().toString());

        Item item2 = new Item();
        item2.setTitle("Whazzupp!!");
        item2.setDescription("React seems to be pretty cool!");
        item2.setVoteCount(25);
        item2.setKey(UUID.randomUUID().toString());

        Item item3 = new Item();
        item3.setTitle("Whazzupp!!");
        item3.setDescription("React seems to be pretty cool!");
        item3.setVoteCount(25);
        item3.setKey(UUID.randomUUID().toString());

        this.items.add(item1);
        this.items.add(item2);
        this.items.add(item3);
    }

    public Collection<Item> getItems() {
        return items;
    }

    public static ItemService getService() {
        return service;
    }
}
