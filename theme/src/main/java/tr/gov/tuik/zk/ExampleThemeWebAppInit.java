package tr.gov.tuik.zk;

import org.zkoss.zk.ui.WebApp;
import org.zkoss.zk.ui.util.WebAppInit;
import org.zkoss.zul.theme.Themes;

public class ExampleThemeWebAppInit implements WebAppInit {

	private final static String EXAMPLE_NAME = "example";
	private final static String EXAMPLE_DISPLAY = "Example";
	private final static int EXAMPLE_PRIORITY = 1000;

	public void init(WebApp wapp) throws Exception {
		Themes.register(EXAMPLE_NAME, EXAMPLE_DISPLAY, EXAMPLE_PRIORITY);
	}

}
