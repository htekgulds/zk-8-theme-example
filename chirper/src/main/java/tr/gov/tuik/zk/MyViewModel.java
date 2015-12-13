package tr.gov.tuik.zk;

import org.zkoss.bind.annotation.*;

@NotifyCommand(value = "doLabelChange", onChange = "_vm_.count")
@ToClientCommand({"doLabelChange"})
public class MyViewModel {

	private int count;

	@Init
	public void init() {
		count = 100;
	}

	@Command
	@NotifyChange("count")
	public void cmd() {
		++count;
	}

	public int getCount() {
		return count;
	}
}
