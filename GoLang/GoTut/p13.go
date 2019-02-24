package main

import (
	"encoding/xml"
	"fmt"
	"io/ioutil"
	"net/http"
)

type SiteMapIndex struct {
	Locations []string `xml:"url>loc"`
}

func main() {
	resp, _ := http.Get("https://www.xml-sitemaps.com/download/ngohungphuc.wordpress.com-747582882/sitemap.xml?view=1")
	bytes, _ := ioutil.ReadAll(resp.Body)
	resp.Body.Close()

	var s SiteMapIndex
	xml.Unmarshal(bytes, &s)

	//_ stand for index
	for _, Location := range s.Locations {
		fmt.Printf("\n%s", Location)
	}
}
