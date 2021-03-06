/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
package com.infosys.lexauthoringservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableAsync
public class LexAuthoringServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(LexAuthoringServicesApplication.class, args);
	}

	/**
	 * Initializes the rest template
	 * 
	 * @return
	 * @throws Exception
	 */
	@Bean
	public RestTemplate restTemplate() throws Exception {
		return new RestTemplate();
	}
}
