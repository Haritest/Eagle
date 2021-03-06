/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
package com.infosys.lexauthoringservices.validation.model;

import java.util.LinkedList;
import java.util.List;

import org.neo4j.driver.v1.types.Node;

public class Paths {
	private List<Path> paths;

	public Paths(List<Path> paths) {
		this.paths = paths;
	}

	public List<Path> getPaths() {
		return paths;
	}

	public void setPaths(List<Path> paths) {
		this.paths = paths;
	}

	public Node getEndNode(Node startNode, String relationType) {

		for (Path path : paths) {

			if (path.getFromNode().equals(startNode)
					&& path.getRelation().asMap().get("route").toString().equals(relationType)) {

				return path.getToNode();
			}
		}
		return null;
	}

	public Node getNodeById(String startNodeId) {
		for (Path path : paths) {
			if (path.getFromNode().get("identifier").toString().replaceAll("\"", "").equals(startNodeId)) {
				return path.getFromNode();
			}
		}
		return null;
	}

	public static void main(String argsp[]) {

		LinkedList<String> arr = new LinkedList<>();
		arr.add("a");
		arr.add("b");
		arr.add("c");

		System.out.println(arr instanceof List);

	}
}
