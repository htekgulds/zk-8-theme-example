package tr.gov.tuik.zk;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.zkoss.bind.BindUtils;
import org.zkoss.bind.annotation.*;
import org.zkoss.zk.ui.event.Event;
import org.zkoss.zk.ui.event.EventListener;
import org.zkoss.zk.ui.event.EventQueue;
import org.zkoss.zk.ui.event.EventQueues;

import java.util.*;

@NotifyCommand(value = "doItemsChange", onChange = "_vm_.items")
@ToClientCommand({"doItemsChange", "doAddItem"})
@ToServerCommand({"doAddItem", "doUpdateVote"})
public class MyViewModel {

	private final Logger log = LoggerFactory.getLogger(MyViewModel.class);
	private Collection<Item> items;
	private EventQueue<Event> itemQueue = EventQueues.lookup("item", EventQueues.APPLICATION, true);

	@Init
	public void init() {
		items = ItemService.getService().getItems();
		itemQueue.subscribe(new EventListener<Event>() {
			public void onEvent(Event event) throws Exception {
				if ("onAddItem".equals(event.getName())) {
					Map<String, Object> params = new HashMap<String, Object>();
					params.put("item", event.getData());
					BindUtils.postGlobalCommand(null, null, "refreshItems", params);
				}
			}
		});
	}

	@GlobalCommand
	@NotifyChange("items")
	public void refreshItems(@BindingParam("item") Item item) {
		if (!items.contains(item)) {
			items.add(item);
		}
	}

	@Command
	@NotifyChange("items")
	public void doAddItem(
			@BindingParam("title") String title,
			@BindingParam("description") String description,
			@BindingParam("voteCount") int voteCount) {

		Item item = new Item(title, description, voteCount);
		items.add(item);
		itemQueue.publish(new Event("onAddItem", null, item));
	}

	@Command
	@NotifyChange("items")
	public void doUpdateVote(
			@BindingParam("key") String key,
			@BindingParam("voteCount") int voteCount) {

		for (Item i : items) {
			if (i.getKey().equals(key)) {
				i.setVoteCount(voteCount);
			}
		}
	}

	public Collection<Item> getItems() {
		return items;
	}
}
